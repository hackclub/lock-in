# Get the first 6 characters of the current git commit hash
git_hash = ENV["SOURCE_COMMIT"]&.[](0..5) ||
           `git rev-parse HEAD`.strip[0..5] rescue "unknown"

# Check if there are any uncommitted changes
is_dirty = `git status --porcelain`.strip.length > 0 rescue false

# Append "-dirty" if there are uncommitted changes
version = is_dirty ? "#{git_hash}-dirty" : git_hash

# Store server start time
Rails.application.config.server_start_time = Time.current

# Store the version
Rails.application.config.git_version = version
