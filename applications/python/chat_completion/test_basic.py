import unittest

from chat_completion import basic

class TestBasic(unittest.TestCase):
    def test_successful_basic_response(self):
        self.assertEqual('yes', basic())
