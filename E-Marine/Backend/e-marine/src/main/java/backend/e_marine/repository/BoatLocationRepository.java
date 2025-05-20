package backend.e_marine.repository;

import backend.e_marine.entity.BoatLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoatLocationRepository extends JpaRepository<BoatLocation, Long> {
}
