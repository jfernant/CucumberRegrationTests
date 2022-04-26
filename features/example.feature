Feature: Example Website Test

    # Scenario Outline es para 
    # usar la ejecutar las pruebas por cada fila de la tabla
    Scenario: Should load website and assert element

        Given I am on example website
        When I wait 3 seconds
        Then I see title element