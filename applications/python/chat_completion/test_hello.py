import unittest

from chat_completion import hello

class TestHello(unittest.TestCase):
    def test_successful_hello_response(self):
        self.assertEqual('Hello Test', hello())
