#!/usr/bin/env python3
"""Log Stats"""


from pymongo import MongoClient


def log_stats():
    """Log Stats"""
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs = client.logs.nginx

    total_logs = logs.count_documents({})
    print(f'{total_logs} logs')

    print('Methods:')
    methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    for method in methods:
        count = logs.count_documents({'method': method})
        print(f'\tmethod {method}: {count}')

    status_check = logs.count_documents({
        'method': 'GET',
        'path': '/status'
        })
    print(f'{status_check} status check')


if __name__ == "__main__":
    log_stats()
