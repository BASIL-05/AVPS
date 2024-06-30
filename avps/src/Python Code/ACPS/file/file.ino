#include <ESP8266WiFi.h>
#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include <Adafruit_GFX.h>
#include <Servo.h>
#define OLED_WIDTH 128
#define OLED_HEIGHT 64
 
#define OLED_ADDR   0x3C
 
Adafruit_SSD1306 display(OLED_WIDTH, OLED_HEIGHT);
WiFiServer server(80); 
int led_green = D4;
int led_red = D3;
 
Servo myservo; 
void disp(int n){
    display.clearDisplay();
 
  display.setTextSize(2);
  display.setTextColor(WHITE);
  display.setCursor(0, 0);
 
 
  display.setTextSize(2);
  display.setTextColor(WHITE);
  n==1?display.println("ACCESS      GRANTED"):display.println("ACCESS      DENIED");
  display.display();
}
void setup() {
  myservo.attach(D7,500,2400); 
    display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR);
  display.clearDisplay();
  // put your setup code here, to run once:
  pinMode(led_green, OUTPUT);
  pinMode(led_red, OUTPUT);
  digitalWrite(D6,HIGH);
 
Serial.begin(115200);
WiFi.mode(WIFI_AP); 
WiFi.softAP("Tesla", "12345678"); 
server.begin(); 
Serial.begin(115200);
IPAddress HTTPS_ServerIP= WiFi.softAPIP(); 
}
 
void loop() {
  // put your main code here, to run repeatedly:
 
  //Controlling speed (0 = off and 255 = max speed):     
  //(Optional)
   WiFiClient client = server.available();
if (!client) {
return;
}
 
 
 
String request = client.readStringUntil('\r');
 
if (request.indexOf("/yes") != -1){
  digitalWrite(led_green, HIGH);
  digitalWrite(led_red, LOW);
  disp(1);
  myservo.write(180);
  delay(5000);
  digitalWrite(led_green, LOW);
  myservo.write(90);
}
else if (request.indexOf("/no") != -1){
  digitalWrite(led_green, LOW);
  digitalWrite(led_red, HIGH);
  disp(0);
  myservo.write(90);  
  }
  else  {
  digitalWrite(led_green, LOW);
  digitalWrite(led_red, HIGH);
  disp(0);
  myservo.write(90);  
  }
// else if (request.indexOf("/stop") != -1){
//   digitalWrite(led_green, LOW);
//   digitalWrite(led_red, LOW);
 
//     }
 
  // else{
  //    digitalWrite(led_green, LOW);
  // digitalWrite(led_red, LOW);
 
  // }
 
}