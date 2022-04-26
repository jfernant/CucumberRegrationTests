Feature: Enter to the blackboard and sumadi site

  Scenario: As a instructor, I can log into blackboard and sumadi

    Given I am on the login page and click ok button
    When I login with credentials
    Then I should see a Stream title

    When I click on course
    Then I should see a Course Content Title 
    And click on test course