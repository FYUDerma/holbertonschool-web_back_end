#!/usr/bin/env python3
"""0. Async Generator"""
import asyncio
import random
import time
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Async Generator"""
    for _ in range (10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)