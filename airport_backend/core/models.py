
from django.db import models





class Flight(models.Model):
    flight_number = models.CharField(unique=True, max_length=100)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    status = models.CharField(max_length=100,choices=[
        ("Scheduled","Scheduled"),
        ("Delayed","Delayed"),
        ("Cancelled","Cancelled"),

    ])

    def __str__(self):
        return f"{self.flight_number}"





class Passenger(models.Model):
    name = models.CharField(max_length=100)
    passport_number = models.CharField(unique=True, max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(unique=True, max_length=100)


    def __str__(self):
        return self.name




class Booking(models.Model):
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
    passenger = models.ForeignKey(Passenger, on_delete=models.CASCADE,related_name="passengers")
    seat_number = models.CharField(unique=True, max_length=100)
    status = models.CharField(max_length=100,choices=[("Confirmed","Confirmed"),
                                                      ("Cancelled","Cancelled"),
                                                      ])
    booking_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.passenger.name} - {self.flight.flight_number}"