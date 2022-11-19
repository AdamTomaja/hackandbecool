package com.busyteam.hackbackend.habits.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface HabitRepository extends MongoRepository<DbHabit, String> {}
