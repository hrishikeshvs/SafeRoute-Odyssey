from django.test import TestCase
from .models import RoadSafetyRule

class RoadSafetyRuleTestCase(TestCase):
    def test_rule_creation(self):
        rule = RoadSafetyRule.objects.create(
            rule_title='Example Rule',
            description='This is an example rule.'
        )
        self.assertEqual(rule.rule_title, 'Example Rule')
        self.assertEqual(rule.description, 'This is an example rule.')
