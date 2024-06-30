#include <WiFi.h>
#include <HTTPClient.h>
 
const char* ssid = "Tesla";
const char* password = "12345678";
WiFiClient client;
const int buttonPin = 5;  // Define the button pin
int buttonState = 0;
 
void setup() {
  Serial.begin(115200);
  delay(10);
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
}
 
void loop() {
  if (Serial.available() > 0) {
    String msg = Serial.readString();
 
    if (msg == "ON") {
      HTTPClient http;
 
      http.begin("http://192.168.4.1/yes");  // Change to "http://192.168.4.1/OFF" for OFF
 
      http.GET();
 
      http.end();
    } else if (msg == "OFF") {
      HTTPClient http;
 
      http.begin("http://192.168.4.1/no");  // Change to "http://192.168.4.1/OFF" for OFF
 
      http.GET();
 
      http.end();
    } else {
 
      HTTPClient http;
 
      http.begin("http://192.168.4.1/no");  // Change to "http://192.168.4.1/OFF" for OFF
 
      http.GET();
 
      http.end();
    }
  }
}