Feature: Gerar Código?
  Gerar um código de layout de vídeo em formato lista
  Scenario: Código de layout em formato lista para mobile
    Given Gerar código
    When Código não é válido
    Then Eu recebo o "Nope"