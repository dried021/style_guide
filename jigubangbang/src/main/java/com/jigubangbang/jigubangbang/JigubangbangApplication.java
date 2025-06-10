package com.jigubangbang.jigubangbang;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;


@SpringBootApplication
public class JigubangbangApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().filename("setting.env").directory("./").load();
		dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
		SpringApplication.run(JigubangbangApplication.class, args);
	}

}
