package com.busyteam.hackbackend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableScheduling
public class HackbackendApplication {

  public static void main(String[] args) {
    SpringApplication.run(HackbackendApplication.class, args);
  }

  @Bean
  public WebMvcConfigurer corsConfigurer(@Value("${foodie.ui.host}") String uiHost) {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins(uiHost);
      }
    };
  }
}
