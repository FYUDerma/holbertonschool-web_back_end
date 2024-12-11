#!/usr/bin/env python3
"""Simple Helper Function"""
import typing


def index_range(page: int, page_size: int) -> typing.Tuple[int, int]:
    """Return a tuple of size with a start index and an end index"""
    return ((page - 1) * page_size, page * page_size)
