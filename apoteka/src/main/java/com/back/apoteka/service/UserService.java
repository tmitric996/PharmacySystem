package com.back.apoteka.service;

import java.util.List;

import com.back.apoteka.model.User;
import com.back.apoteka.request.AddUserRequest;
import com.back.apoteka.request.RegisterRequest;
import com.back.apoteka.request.UserRequest;
import com.back.apoteka.request.UserUpdateRequest;;

public interface UserService {
    User findById(Long id);
    //User findByUsername(String username);
    List<User> findAll ();
	User save(UserRequest userRequest);
	public void deleteUser(User user);
	User findByEmail(String email);
	User update(UserUpdateRequest uur);
	List<User> findAllDermatoligists();

	User register(RegisterRequest userRequest);

	List<User> findAllPharmacists();
	User findOnePharmacist(Long id);
	User addUser(AddUserRequest userRequest);

}