package com.busyteam.hackbackend.habits.repository;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Builder
public class DbHabit {

    @Id
    private String id;

    private String title;
    private String description;
}
