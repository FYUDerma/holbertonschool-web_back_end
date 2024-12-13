#!/usr/bin/env python3
""" 8. List all documents in Python """


def list_all(mango_collection):
    """ List all documents in a collection """
    try:
        return list(mango_collection.find())
    except Exception:
        return []
