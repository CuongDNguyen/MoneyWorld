package com.cuongworlds.MoneyWorldApi;

import com.cuongworlds.MoneyWorldApi.character.Character;
import com.cuongworlds.MoneyWorldApi.character.CharacterRepository;
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
			characterRepository.save(new Character("Developer Cuong", "Software Developer", 0));
			characterRepository.save(new Character("Risky Dan", "The Stock Trader", 0));

		};
	}
}
