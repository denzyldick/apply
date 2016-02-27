# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # Base Box
  # --------------------
  config.vm.box = "ubuntu/trusty64"
  # Connect to IP
  # Note: Use an IP that doesn't conflict with any OS's DHCP (Below is a safe bet)
  # --------------------
  config.vm.network :private_network, ip: "192.168.56.101"

  # Forward to Port
  # --------------------
  config.vm.network :forwarded_port, guest: 80, host: 8080,auto_correct: true


  # Optional (Remove if desired)
  config.vm.provider :virtualbox do |v|
    # How much RAM to give the VM (in MB)
    # -----------------------------------
    v.customize ["modifyvm", :id, "--memory", "500"]

    # Uncomment the Bottom two lines to enable muli-core in the VM
    v.customize ["modifyvm", :id, "--cpus", "2"]
    v.customize ["modifyvm", :id, "--ioapic", "on"]
  end

  # Provisioning Script
  # --------------------
  config.vm.provision "shell", path: "init.sh"
  config.vm.provision "shell", inline: "cd /vagrant && composer install"

  # Synced Folder
  # --------------------
  config.vm.synced_folder ".", "/vagrant/", :mount_options => [ "dmode=777", "fmode=666" ]
  config.vm.synced_folder "./public", "/vagrant/public/", :mount_options => [ "dmode=775", "fmode=644" ], :owner => 'www-data', :group => 'www-data'

end
