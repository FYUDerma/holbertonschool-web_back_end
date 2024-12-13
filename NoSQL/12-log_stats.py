#!/usr/bin/env python3
"""Log Stats"""
from pymongo import MongoClient


def log_stats():
    """Log Stats"""
    client = MongoClient()
    logs = client.logs.nginx

    """Number of documents in logs collection"""
    print(f'{logs.count_documents({})} logs')

    print('Methods:')

    """Number of documents with method=GET"""
    method_get = logs.count_documents({"method": "GET"})
    print(f'\tmethod GET: {method_get}')
    """Number of documents with method=POST"""
    method_post = logs.count_documents({"method": "POST"})
    print(f'\tmethod POST: {method_post}')
    """Number of documents with method=PUT"""
    method_put = logs.count_documents({"method": "PUT"})
    print(f'\tmethod PUT: {method_put}')
    """Number of documents with method=PATCH"""
    method_patch = logs.count_documents({"method": "PATCH"})
    print(f'\tmethod PATCH: {method_patch}')
    """Number of documents with method=DELETE"""
    method_delete = logs.count_documents({"method": "DELETE"})
    print(f'\tmethod DELETE: {method_delete}')

    """Number of documents with method=GET and path=/status"""
    method_get_path = logs.count_documents({
        "method": "GET",
        "path": "/status"
        })
    print(f'{method_get_path} status check')


if __name__ == "__main__":
    log_stats()
