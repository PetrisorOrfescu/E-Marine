package backend.e_marine.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class Boat {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String type;
    private String status;

    @OneToOne
    private BoatLocation currentLocation;
}
