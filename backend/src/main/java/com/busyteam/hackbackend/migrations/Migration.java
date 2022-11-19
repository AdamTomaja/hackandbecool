package com.busyteam.hackbackend.migrations;

import com.busyteam.hackbackend.items.repository.DbItem;
import com.busyteam.hackbackend.items.repository.ItemCategory;
import com.busyteam.hackbackend.items.repository.ItemRepository;
import com.busyteam.hackbackend.items.repository.ItemStatus;
import java.time.LocalDateTime;
import java.util.Random;
import javax.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
//@Component
public class Migration {

  private final ItemRepository itemRepository;

  @PostConstruct
  public void init() {
    itemRepository.findAll().stream()
        .map(this::assignState)
        .map(this::asssignCategory)
        .forEach(itemRepository::save);
  }

  private DbItem asssignCategory(DbItem dbItem) {
    return dbItem.toBuilder()
        .category(ItemCategory.FOOD)
        .created(LocalDateTime.now().minusDays(new Random().nextInt(30)))
        .build();
  }

  private DbItem assignState(DbItem dbItem) {
    Random random = new Random();
    switch (random.nextInt(4)) {
      case 0:
        return dbItem.toBuilder().status(ItemStatus.IN_STOCK).build();
      case 1:
        return dbItem.toBuilder().status(ItemStatus.NEED_TO_BUY).build();
      case 2:
        return dbItem.toBuilder().status(ItemStatus.EXPIRED).build();
      case 3:
        return dbItem.toBuilder().status(ItemStatus.OUT_OF_STOCK).build();
    }
    throw new IllegalArgumentException("");
  }
}
