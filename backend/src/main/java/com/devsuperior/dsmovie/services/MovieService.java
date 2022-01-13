package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository; 
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable); //-- Acesso o banco de dados retornando uma Lista paginada do tipo Movie		
		Page<MovieDTO> page =  result.map(x -> new MovieDTO(x));  //-- Convertendo o resultando de Movie para MovieDTO usando map usando a expressão lambida
		return page;
	}

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie result = repository.findById(id).get(); //-- Acesso o banco de dados retornando uma Lista paginada do tipo Movie		
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}
	
}
