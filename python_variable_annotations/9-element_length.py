#!/usr/bin/env python3
""" Let's duck type an iterable object """
from typing import Iterable, List, Tuple, Sequence
from itertools import combinations


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ Duck type an iterable object """
    return [(i, len(i)) for i in lst]
