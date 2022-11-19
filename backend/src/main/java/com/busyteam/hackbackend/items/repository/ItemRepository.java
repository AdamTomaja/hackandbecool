package com.busyteam.hackbackend.items.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<DbItem, String> {}
