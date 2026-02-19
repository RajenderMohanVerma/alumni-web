import sqlite3
import os

def migrate():
    conn = sqlite3.connect('college_pro.db')
    c = conn.cursor()
    
    print("Creating Job ecosystem tables...")
    
    # Create jobs table
    c.execute('''CREATE TABLE IF NOT EXISTS jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        company TEXT NOT NULL,
        description TEXT,
        required_skills TEXT,
        posted_by INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (posted_by) REFERENCES users(id) ON DELETE CASCADE
    )''')
    
    # Create job_applications table (for tracking interest)
    c.execute('''CREATE TABLE IF NOT EXISTS job_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        job_id INTEGER,
        student_id INTEGER,
        status TEXT DEFAULT 'applied',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE,
        FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE
    )''')
    
    conn.commit()
    conn.close()
    print("Job ecosystem tables created successfully!")

if __name__ == "__main__":
    migrate()
