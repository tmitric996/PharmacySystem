package com.back.apoteka.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.back.apoteka.exception.ResourceConflictException;
import com.back.apoteka.model.User;
import com.back.apoteka.request.RegisterRequest;
import com.back.apoteka.request.UserRequest;
import com.back.apoteka.response.UserTokenState;
import com.back.apoteka.security.TokenUtils;
import com.back.apoteka.security.auth.JwtAuthenticationRequest;
import com.back.apoteka.service.AuthorityService;
import com.back.apoteka.service.UserService;
import com.back.apoteka.service.impl.CustomUserDetailsService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {

	@Autowired
	private TokenUtils tokenUtils;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private CustomUserDetailsService userDetailsService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthorityService authService;

	@PostMapping("/login")
	public ResponseEntity<UserTokenState> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest,
			HttpServletResponse response) {

		// 
		
		Authentication authentication = (Authentication) authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
						authenticationRequest.getPassword()));
		System.out.println("odradio authentifikaciju");
		// Ubaci korisnika u trenutni security kontekst
		SecurityContextHolder.getContext().setAuthentication((org.springframework.security.core.Authentication) authentication);

		// Kreiraj token za tog korisnika
		User user = (User) ((org.springframework.security.core.Authentication) authentication).getPrincipal();
		String jwt = tokenUtils.generateToken(user.getUsername());
		int expiresIn = tokenUtils.getExpiredIn();
		String role = tokenUtils.getAudienceFromToken(jwt);

		// Vrati token kao odgovor na uspesnu autentifikaciju
		return ResponseEntity.ok(new UserTokenState(jwt, expiresIn, role));
	}

	@PostMapping("/signup")
	public ResponseEntity<User> addUser(@RequestBody UserRequest userRequest, UriComponentsBuilder ucBuilder) {

		User existUser = this.userService.findByEmail(userRequest.getEmail());
		if (existUser != null) {
			throw new ResourceConflictException(userRequest.getId(), "Username already exists");
		}
		
		User user = this.userService.save(userRequest);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/user/{userId}").buildAndExpand(user.getId()).toUri());
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}
	@PostMapping("/register")
	public ResponseEntity<User> RegisterUser(@RequestBody RegisterRequest userRequest, UriComponentsBuilder ucBuilder) {

		User existUser = this.userService.findByEmail(userRequest.getEmail());
		if (existUser != null) {
			throw new ResourceConflictException(existUser.getId(), "Username already exists");
		}
		
		User user = this.userService.register(userRequest);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/user/{userId}").buildAndExpand(user.getId()).toUri());
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

	@PostMapping(value = "/refresh")
	public ResponseEntity<UserTokenState> refreshAuthenticationToken(HttpServletRequest request) {

		String token = tokenUtils.getToken(request);
		String username = this.tokenUtils.getUsernameFromToken(token);
		User user = (User) this.userDetailsService.loadUserByUsername(username);

		if (this.tokenUtils.canTokenBeRefreshed(token, user.getLastPasswordResetDate())) {
			String refreshedToken = tokenUtils.refreshToken(token);
			int expiresIn = tokenUtils.getExpiredIn();
			String role = tokenUtils.getAudienceFromToken(refreshedToken);

			return ResponseEntity.ok(new UserTokenState(refreshedToken, expiresIn, role));
		} else {
			UserTokenState userTokenState = new UserTokenState();
			return ResponseEntity.badRequest().body(userTokenState);
		}
	}

	@RequestMapping(value = "/change-password", method = RequestMethod.POST)
	//@PreAuthorize("hasRole('PATIENT')")
	public ResponseEntity<?> changePassword(@RequestBody PasswordChanger passwordChanger) {
		userDetailsService.changePassword(passwordChanger.oldPassword, passwordChanger.newPassword);

		Map<String, String> result = new HashMap<>();
		result.put("result", "success");
		return ResponseEntity.accepted().body(result);
	}

	static class PasswordChanger {
		public String oldPassword;
		public String newPassword;
	}
}
