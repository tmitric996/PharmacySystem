package com.back.apoteka.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.apoteka.model.Authority;
import com.back.apoteka.repository.AuthorityRepository;
import com.back.apoteka.service.AuthorityService;



@Service
public class AuthorityServiceImpl implements AuthorityService {

  @Autowired
  private AuthorityRepository authorityRepository;

  @Override
  public List<Authority> findById(Long id) {
    Authority auth = this.authorityRepository.getOne(id);
    List<Authority> auths = new ArrayList<>();
    auths.add(auth);
    return auths;
  }

  @Override
  public List<Authority> findByname(String name) {
    Authority auth = this.authorityRepository.findByName(name);
    List<Authority> auths = new ArrayList<>();
    auths.add(auth);
    return auths;
  }
  
  public Authority findOne(Long id) {
	  return authorityRepository.findById(id).orElseGet(null);
  }
  
  public Authority findName(String name) {
	  return authorityRepository.findByName(name);
  }
  
  


}
