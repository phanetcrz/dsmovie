package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {

	@EmbeddedId
	private ScorePK id = new ScorePK(); //-- instanciando a classe scorePK na classe Score
	
	private Double value;
	
	public Score() {		
	}
	
	public void setMovie(Movie movie) { //-- fazendo a associaçao entre o score e a classe movie
		id.setMovie(movie);
	}
	
	public void setUser(User user) {   //-- Fazendo a associação entre a tabela score e usuário 
		id.setUser(user);
	}

	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
}
