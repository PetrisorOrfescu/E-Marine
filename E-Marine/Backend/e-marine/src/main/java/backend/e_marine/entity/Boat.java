package backend.e_marine.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class Boat {
    @Id
    private Long id;
    private String name;
    private String type;
    private String status;

    @OneToMany(mappedBy = "boat", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BoatLocation> locations = new ArrayList<>();
}
