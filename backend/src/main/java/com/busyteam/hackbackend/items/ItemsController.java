package com.busyteam.hackbackend.items;

import com.busyteam.hackbackend.items.repository.DbItem;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ItemsController {

    private final ItemsService itemsService;

    @PostMapping("/items")
    public DbItem addItem(@RequestBody DbItem item) {
        log.info("Creating new item: {}", item);
        return itemsService.createNewItem(item);
    }

    @GetMapping("/items")
    public List<DbItem> getAllItems() {
        log.info("Listing all items");
        return itemsService.getAllItems();
    }
}
