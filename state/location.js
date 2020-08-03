import Vue from 'vue'
import { WELL_KNOWN_LOCATIONS } from '~/config/locations'

function distanceBetweenCoords(coordsA, coordsB) {
  const lat = coordsA.latitude - coordsB.latitude
  const long = coordsA.longitude - coordsB.longitude
  return Math.sqrt(lat ** 2 + long ** 2)
}

function closestWellKnownLocation(coords) {
  let smallestDistance = Infinity
  let locationWithSmallestDistance

  WELL_KNOWN_LOCATIONS.forEach((location) => {
    const newDistance = distanceBetweenCoords(location.coords, coords)
    if (smallestDistance > newDistance) {
      smallestDistance = newDistance
      locationWithSmallestDistance = location
    }
  })
  return locationWithSmallestDistance
}

export const Location = new Vue({
  data() {
    return {
      coords: null,
      error: null,
    }
  },
  computed: {
    locationName() {
      if (!this.coords) {
        return null
      }
      return closestWellKnownLocation(this.coords).name
    },
  },
  created() {
    navigator.geolocation.watchPosition(
      this.updatePosition,

      this.handleError,
      options,
    )
  },
  methods: {
    updatePosition(position) {
      this.coords = position.coords
      this.error = null
    },
    handleError(error) {
      this.coords = null
      this.error = error
    },
  },
})

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
}
