Feature: Requesting prices for a dress
  As a user I want to be able to select and check the prices for a dress.

  Background:
    Given I open site 'automationpractice.com/index.php'

  Scenario: Selecting summer dresses with size: 'L' and color: 'Yellow'
    Given  I select WOMEN tab
    And  I select Dresses from WOMEN box
    And  I select Summer Dresses from DRESSES box
    When  I check 'L' size from catalog
    And  I select 'Yellow' color from catalog
    And  I Select 'Price: Lowest first' option in Sort By dropdown
    Then  Verify that 'Printed Chiffon Dress' is displayed with a price of '16.40'
    And  Verify that 'Printed Summer Dress' is displayed with a price of '28.98'
    And  Verify that the listed items have ascendant ordering by the price
