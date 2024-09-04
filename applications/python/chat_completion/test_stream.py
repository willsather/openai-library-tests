import unittest

from chat_completion import stream

class TestStreamFunction(unittest.TestCase):

    def test_stream_function(self):
        chunks = list(stream())
        self.assertEqual(['', 'Hello', ' Stream', ' Test'], chunks)
