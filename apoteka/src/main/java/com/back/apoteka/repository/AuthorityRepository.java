package com.back.apoteka.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
	Authority findByName(String name);
}
