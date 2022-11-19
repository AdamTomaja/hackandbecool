package com.busyteam.hackbackend.items.repository;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
public class DbItem {

    @Id
    private String id;

    private String name;

    private LocalDateTime expirationDate;
}
