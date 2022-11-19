package com.busyteam.hackbackend.items;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<DbItem, String> {
}
