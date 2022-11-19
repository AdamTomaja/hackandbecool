package com.busyteam.hackbackend.items;

import com.busyteam.hackbackend.items.repository.DbItem;
import com.busyteam.hackbackend.items.repository.ItemRepository;
import com.busyteam.hackbackend.items.repository.ItemStatus;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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

  public List<DbItem> getAllItems(ItemStatus status) {
    return itemRepository.findAllByStatus(status).stream().map(this::setExpirationDays).toList();
  }

  private DbItem setExpirationDays(DbItem dbItem) {
    return dbItem.toBuilder()
        .expirationDays(Duration.between(LocalDateTime.now(), dbItem.getExpirationDate()).toDays())
        .build();
  }

  public DbItem deleteItem(String id) {
    return itemRepository
        .findById(id)
        .map(this::markAsDeleted)
        .map(itemRepository::save)
        .orElseThrow();
  }

  private DbItem markAsDeleted(DbItem dbItem) {
    return dbItem.toBuilder().status(ItemStatus.DELETED).build();
  }

  public DbItem updateItemById(String id, DbItem item) {
    DbItem.DbItemBuilder itemById = itemRepository.findById(id).orElseThrow().toBuilder();
    Optional.ofNullable(item.getStatus()).ifPresent(itemById::status);
    Optional.ofNullable(item.getExpirationDate()).ifPresent(itemById::expirationDate);

    return itemRepository.save(itemById.build());
  }
}
