package com.busyteam.hackbackend.items;

import com.busyteam.hackbackend.items.repository.DbItem;
import com.busyteam.hackbackend.items.repository.ItemRepository;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ItemsService {

  private final ItemRepository itemRepository;

  public DbItem createNewItem(DbItem item) {
    log.info("Adding new item: {}", item);
    return itemRepository.save(item.toBuilder().created(LocalDateTime.now()).build());
  }

  public List<DbItem> getAllItems() {
    return itemRepository.findAll();
  }
}
