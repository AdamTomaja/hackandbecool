package com.busyteam.hackbackend.items.repository;

import java.time.LocalDateTime;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@NoArgsConstructor
@Builder(toBuilder = true)
@AllArgsConstructor
@Getter
@ToString
public class DbItem {

  @Id private String id;

  private String name;

  private LocalDateTime expirationDate;
  private LocalDateTime created;

  private ItemStatus status;

  private ItemCategory category;
}
