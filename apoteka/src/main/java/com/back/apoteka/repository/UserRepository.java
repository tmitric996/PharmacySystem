package com.back.apoteka.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Authority;
import com.back.apoteka.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    //User findByUsername( String username );
    User findByEmail( String email );
    List<User> findByAuthority(Authority authority);
 
    
}
