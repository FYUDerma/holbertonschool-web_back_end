#!/usr/bin/env python3
""" Complex types - mixed list """
from typing import List, Union


def sum_mixed_list(mxd_lstl: list[Union[int, float]]) -> float:
    """ Returns the sum of the list of floats. """
    return sum(mxd_lstl)
