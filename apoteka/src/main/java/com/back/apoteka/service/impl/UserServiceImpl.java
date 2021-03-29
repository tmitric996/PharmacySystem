package com.back.apoteka.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.back.apoteka.model.Authority;
import com.back.apoteka.model.Pharmacy;
import com.back.apoteka.model.User;
import com.back.apoteka.repository.UserRepository;
import com.back.apoteka.request.AddUserRequest;
import com.back.apoteka.request.DermatologistRequest;
import com.back.apoteka.request.RegisterRequest;
import com.back.apoteka.request.UserRequest;
import com.back.apoteka.request.UserUpdateRequest;
import com.back.apoteka.service.AuthorityService;
import com.back.apoteka.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AuthorityService authService;

	@Autowired
	private CustomUserDetailsService customUserService;

	public User findById(Long id) throws AccessDeniedException {
		User u = userRepository.findById(id).orElseGet(null);
		return u;
	}

	public List<User> findAll() throws AccessDeniedException {
		List<User> result = userRepository.findAll();
		return result;
	}

	@Override
	public User save(UserRequest userRequest) {
		User u = new User();
		u.setEmail(userRequest.getEmail());
		u.setPassword(passwordEncoder.encode(userRequest.getPassword()));
		u.setFirstName(userRequest.getFirstname());
		u.setLastName(userRequest.getLastname());
		u.setEnabled(true);
		u.setCity(userRequest.getCity());
		u.setState(userRequest.getState());
		u.setPhoneNumber(userRequest.getPhone());
		u.setHomeAddress(userRequest.getAddress());
		u.setFirstLogin(true);
		Authority authority = authService.findName("ROLE_PATIENT");
		u.setAuthority(authority);
		List<Authority> auth = authService.findByname("ROLE_PATIENT");
		u.setAuthorities(auth);
		
		
		u = this.userRepository.save(u);
		return u;
	}

	@Override
	public User update(UserUpdateRequest uur) {
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		String email = currentUser.getName();
		User u = (User) customUserService.loadUserByUsername(email);
		u.setFirstName(uur.getFirstname());
		u.setLastName(uur.getLastname());
		u.setCity(uur.getCity());
		u.setState(uur.getState());
		u.setPhoneNumber(uur.getPhone());
		u.setHomeAddress(uur.getAddress());
		return userRepository.save(u);
	}
	
	
	@Transactional(rollbackFor = Exception.class)
	public void deleteUser(User user) {
		userRepository.delete(user);
		
	}

	@Override
	public User findByEmail(String email) {
		System.out.println(email);
		return userRepository.findByEmail(email);
	}

	@Override
	public List<User> findAllDermatoligists(){
		List<User> users=findAll();
		List<User> dermatologists=findAll();
		dermatologists.removeAll(dermatologists);
		for (User u: users) {
			List<Authority> lista=(List<Authority>) u.getAuthorities();
			System.out.println(lista.get(0).getName());
			if (lista.get(0).getName().contains("ROLE_DERMATOLOGIST")) {
				dermatologists.add(u);
			}
		}
		return dermatologists;
	}
	
	@Autowired
	EmailServiceImpl emailService;
	
	@Override
	public User register(RegisterRequest userRequest) {
		User u = new User();
		u.setEmail(userRequest.getEmail());
		u.setPassword(passwordEncoder.encode(userRequest.getPassword()));
		u.setFirstName(userRequest.getName());
		u.setLastName(userRequest.getSurname());
		u.setEnabled(false);
		u.setCity(userRequest.getCity());
		u.setState(userRequest.getCountry());
		u.setPhoneNumber(userRequest.getPhone());
		u.setHomeAddress(userRequest.getAddress());
		Authority authority = authService.findName("ROLE_PATIENT");
		u.setAuthority(authority);
		List<Authority> auth = authService.findByname("ROLE_PATIENT");
		u.setAuthorities(auth);
		u.setFirstLogin(true);
		u = this.userRepository.save(u);
		try {
			emailService.sendNotificaitionAsync(userRequest, u.getId());
		} catch (MailException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return u;
	}

	public User activateAcc(String email) {
		User user = findByEmail(email);
		user.setEnabled(true);
		System.out.println("aktiviran");
		return userRepository.save(user);

	}

	
	@Override
	public List<User> findAllPharmacists(){
		List<User> users=findAll();
		List<User> pharmacists=findAll();
		pharmacists.removeAll(pharmacists);
		for (User u: users) {
			List<Authority> lista=(List<Authority>) u.getAuthorities();
			System.out.println(lista.get(0).getName());
			if (lista.get(0).getName().contains("ROLE_PHARMACIST")) {
				pharmacists.add(u);
			}
		}
		return pharmacists;
	}
	
	public User findOnePharmacist(Long id)  {
		List<User> users=findAll();
		User us = new User();
		//User pharmacist = findById(id);
		for (User pharmacist: users) {
		pharmacist = findById(id);
		List<Authority> lista = (List<Authority>) pharmacist.getAuthorities();
		System.out.println(lista.get(0).getName());
			if(lista.get(0).getName().contains("ROLE_PHARMACIST")) {
				us=pharmacist;
			}
		}
		return us;
	}

	public User saveDerm(DermatologistRequest userRequest) {
		User derm = new User();
		derm.setCity(userRequest.getCity());
		derm.setHomeAddress(userRequest.getAddress());
		derm.setEmail(userRequest.getEmail());
		derm.setEnabled(true);
		derm.setFirstName(userRequest.getFirstname());
		derm.setLastName(userRequest.getLastname());
		derm.setPassword(passwordEncoder.encode(userRequest.getPassword()));
		derm.setPhoneNumber(userRequest.getPhone());
		Authority authority = authService.findName("ROLE_DERMATOLOGIST");
		derm.setAuthority(authority);
		List<Authority> auth = authService.findByname("ROLE_DERMATOLOGIST");
		derm.setAuthorities(auth);
		return userRepository.save(derm);
		}

	@Override
	public User addUser(AddUserRequest userRequest) {
		System.out.println("usaouservis");
		User u = new User();
		System.out.println(u.getId());
		u.setEmail(userRequest.getEmail());
		u.setPassword(passwordEncoder.encode(userRequest.getPassword()));
		u.setFirstName(userRequest.getFirstname());
		u.setLastName(userRequest.getLastname());
		u.setEnabled(true);
		u.setCity(userRequest.getCity());
		u.setState(userRequest.getState());
		u.setPhoneNumber(userRequest.getPhone());
		u.setHomeAddress(userRequest.getAddress());
		Authority authority = authService.findName(userRequest.getAuthority().getName());
		System.out.println(authority);
		u.setAuthority(authority);
		u.setFirstLogin(true);
		List<Authority> auth = new ArrayList<Authority>();
		auth.add(authority);
		u.setAuthorities(auth);
		//u = this.userRepository.save(u);
		System.out.println(u);
		return userRepository.save(u);
	}

	@Autowired
	PharmacyServiceImpl pharmacyService;
	public List<User> findFreePharmacyAdmins() {
		Authority authority = authService.findName("ROLE_PHARMACY_ADMIN");
		List<User> pharmacyAdmins = userRepository.findByAuthority(authority);
		List<User> freePharmacyAdmins = userRepository.findByAuthority(authority);
		List<Pharmacy> pharmacys  = pharmacyService.findAll();
		for (User admins: pharmacyAdmins) {
			for (Pharmacy p : pharmacys) {
				if (p.getAdminApoteke().contains(admins)) {
					freePharmacyAdmins.remove(admins);
					break;
				} 
			}
		}
		return freePharmacyAdmins;
	}
}

