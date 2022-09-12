Feature: Book room
  As a customer
  I want to book a room for my vacation

  Scenario: Navigate to book room
    Given I am on the home page
    When I click Hack me button
    Then I am navigated to the book room page
    And I am not able to access the room
    And I do not see accessibility icon

  Scenario: Book a room successfully
    Given I am on the book room page
    And I have chosen to book a room
    And I have chosen the date
    And I have filled my information
    When I submit
    Then I see a booking successfully message
    And I see the correct booking date
