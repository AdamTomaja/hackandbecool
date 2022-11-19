package com.busyteam.hackbackend;

import com.busyteam.hackbackend.items.ItemsService;
import com.busyteam.hackbackend.items.repository.DbItem;
import com.busyteam.hackbackend.items.repository.ItemStatus;
import com.busyteam.hackbackend.notifications.NotificationsService;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.function.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExpirationScheduledService {

  private final ItemsService itemsService;
  private final NotificationsService notificationsService;

  @Scheduled(fixedRate = 1000)
  public void checkForExpiring() {
    List<DbItem> inStockItems = itemsService.getAllItems(ItemStatus.IN_STOCK);
    inStockItems.stream()
        .filter(this::isExpiring)
        .filter(Predicate.not(this::isNotified))
        .forEach(this::createExpiringNotification);
  }

  private void createExpiringNotification(DbItem dbItem) {
    notificationsService.addNotification(dbItem.getId(), "Your item will expire in 2 days");
  }

  private boolean isNotified(DbItem item) {
    return notificationsService.isNotified(item.getId());
  }

  private boolean isExpiring(DbItem dbItem) {
    return Duration.between(LocalDateTime.now(), dbItem.getExpirationDate()).toDays() < 2;
  }
}
