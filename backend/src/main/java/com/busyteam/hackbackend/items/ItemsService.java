package com.busyteam.hackbackend.items;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ItemsService {

    private final ItemRepository itemRepository;

    public DbItem createNewItem(DbItem item) {
        log.info("Adding new item: {}", item);
        return itemRepository.save(item);
    }

    public List<DbItem> getAllItems() {
        return itemRepository.findAll();
    }
}
