````
const int botao1 = 6;
const int botao2 = 4;

const int led1 = 12;
const int led2 = 11;

const int som1 = 8;
const int som2 = 7;

bool travado = false;
unsigned long tempoInicio = 0;
const unsigned long tempoEspera = 10000; // 10 segundos

void setup()
{
  pinMode(botao1, INPUT);
  pinMode(botao2, INPUT);

  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);

  pinMode(som1, OUTPUT);
  pinMode(som2, OUTPUT);
}

void loop()
{
  if (!travado)
  {
    if (digitalRead(botao1) == HIGH)
    {
      digitalWrite(led1, HIGH);
      digitalWrite(led2, LOW);

      // Som 1: um beep longo
      digitalWrite(som1, HIGH);
      delay(500);
      digitalWrite(som1, LOW);

      travado = true;
      tempoInicio = millis();
    }

    else if (digitalRead(botao2) == HIGH)
    {
      digitalWrite(led2, HIGH);
      digitalWrite(led1, LOW);

      // Som 2: dois beeps curtos
      digitalWrite(som2, HIGH);
      delay(150);
      digitalWrite(som2, LOW);
      delay(100);
      digitalWrite(som2, HIGH);
      delay(150);
      digitalWrite(som2, LOW);

      travado = true;
      tempoInicio = millis();
    }
  }

  if (travado && (millis() - tempoInicio >= tempoEspera))
  {
    digitalWrite(led1, LOW);
    digitalWrite(led2, LOW);
    digitalWrite(som1, LOW);
    digitalWrite(som2, LOW);

    travado = false;
  }
}
