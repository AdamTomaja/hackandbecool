package com.busyteam.hackbackend.items;

import com.busyteam.hackbackend.items.repository.DbItem;
import com.busyteam.hackbackend.items.repository.ItemStatus;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

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

  @GetMapping("/items/{status}")
  public List<DbItem> getAllItems(@PathVariable("status") ItemStatus status) {
    log.info("Listing all items");
    return itemsService.getAllItems(status);
  }

  @DeleteMapping("/items/{id}")
  public DbItem deleteItem(@PathVariable("id") String id) {
    log.info("Delete item by id");
    return itemsService.deleteItem(id);
  }

  @PutMapping(value = "/items/{id}")
  public DbItem updateItemById(@PathVariable("id") String id, @RequestBody DbItem item) {
    log.info("Update item by id: {}, {}", id, item);
    return itemsService.updateItemById(id, item);
  }
}
