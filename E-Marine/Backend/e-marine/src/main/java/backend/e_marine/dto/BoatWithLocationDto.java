package backend.e_marine.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@RequiredArgsConstructor
public class BoatWithLocationDto {
    private Long id;
    private String name;
    private String type;
    private String status;
    private Double latitude;
    private Double longitude;
    private LocalDateTime timestamp;
}
