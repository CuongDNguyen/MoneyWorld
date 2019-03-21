package com.cuongworlds.MoneyWorldApi;

import com.cuongworlds.MoneyWorldApi.character.Character;
import com.cuongworlds.MoneyWorldApi.character.CharacterRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MoneyWorldApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoneyWorldApiApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CharacterRepository characterRepository) {
		return args -> {
			ObjectMapper mapper = new ObjectMapper();
			mapper.enable(SerializationFeature.WRAP_ROOT_VALUE);
			Character dC = new Character("Developer Cuong", "Software Developer", 0);
			Character rD = new Character("Risky Dan", "The Stock Trader", 5);
			characterRepository.save(dC);
			characterRepository.save(rD);
		};
	}
}
