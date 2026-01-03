#!/bin/bash

# Backup script for PostgreSQL

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="backup_26442_$TIMESTAMP.sql"

echo "Backing up portfolio_db_26442..."

docker exec -t postgres-26442 pg_dump -U postgres portfolio_db_26442 > ./database/$BACKUP_FILE

echo "Backup saved to ./database/$BACKUP_FILE"
